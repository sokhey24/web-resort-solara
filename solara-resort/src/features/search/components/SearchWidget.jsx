import React from 'react';
import { SearchBar } from '../../../components/search/SearchBar.jsx';
import { useSearch } from '../../../hooks/useSearch.js';

/**
 * Connects the existing SearchBar UI to URL state, booking draft, and destination options from the API.
 */
export function SearchWidget({ className = '', onSearch }) {
  const { criteria, destinationOptions, destinationsLoading, submitSearch } = useSearch();

  return (
    <SearchBar
      className={className}
      initialDestination={criteria.destination}
      initialCheckIn={criteria.checkIn}
      initialCheckOut={criteria.checkOut}
      initialGuests={criteria.adults}
      initialChildren={criteria.children}
      initialRooms={criteria.rooms}
      destinationOptions={destinationOptions}
      destinationsLoading={destinationsLoading}
      onSearch={(payload) => {
        const next = submitSearch({
          destination: payload.destination,
          checkIn: payload.checkIn,
          checkOut: payload.checkOut,
          adults: payload.guests,
          children: payload.children,
          rooms: payload.rooms,
        });
        onSearch?.(next);
      }}
    />
  );
}
