import React from 'react';
import { Modal } from '../ui/Modal.jsx';
import { Button } from '../ui/Button.jsx';
import { useApp } from '../../context/AppContext.jsx';

export function SignOutConfirmDialog({ isOpen, onClose, onConfirm, confirming = false }) {
  const { t } = useApp();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('auth.signOutConfirmTitle', 'Sign out?')}
      subtitle={t(
        'auth.signOutConfirmMessage',
        'You will need to sign in again to access your reservations and account.'
      )}
      maxWidth="sm"
    >
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-1">
        <Button variant="outline" size="sm" onClick={onClose} disabled={confirming}>
          {t('common.cancel', 'Cancel')}
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={onConfirm}
          isLoading={confirming}
          disabled={confirming}
        >
          {t('nav.signOut', 'Sign Out')}
        </Button>
      </div>
    </Modal>
  );
}
