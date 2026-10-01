<?php

namespace App\Http\Controllers\Api\Resort;

use App\Http\Controllers\Controller;
use App\Models\GalleryPhoto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $q = GalleryPhoto::query();
        app(\App\Services\ResortAccessService::class)->applyResortColumnScope($q, $request->user());

        return response()->json($q->get());
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate(['photo' => 'required|image|max:2048', 'resort_id' => 'required|exists:resorts,id']);
        $path = $request->file('photo')->store('gallery', 'public');
        $photo = GalleryPhoto::create(['resort_id' => $request->resort_id, 'path' => $path]);
        return response()->json($photo, 201);
    }

    public function destroy(GalleryPhoto $galleryPhoto): JsonResponse
    {
        $galleryPhoto->delete();
        return response()->json(null, 204);
    }
}
