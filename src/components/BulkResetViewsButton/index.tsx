import { useState } from 'react';
import { Button, Confirm, useRecordContext, useDelete } from 'react-admin';
import DeleteIcon from '@mui/icons-material/Delete';

interface IBulkResetViewsButtonProps {
  resource: string;
  resourceName: string;
}

export const BulkResetViewsButton = ({ resource, resourceName }: IBulkResetViewsButtonProps) => {
  const record = useRecordContext();
  const [open, setOpen] = useState(false);

  const [remove, { isLoading }] = useDelete(resource, { id: record && record.id });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleDialogClose = () => setOpen(false);
  const handleConfirm = () => {
    remove();
    setOpen(false);
  };

  return (
    <>
      <Button label='' onClick={handleClick} startIcon={<DeleteIcon style={{ color: 'red' }} />} />
      <Confirm
        isOpen={open}
        loading={isLoading}
        title={`Удалить ${resourceName} ${
          record && (resource === 'news' || resource === 'projects' || resource === 'articles')
            ? record.title
            : resource === 'members'
            ? record.surname + ' ' + record.name + ' ' + record.patronymic
            : resource === 'reports'
            ? record.year
            : record.composer + ' ' + record.title
        }`}
        content={`Вы уверены, что хотите удалить ${resourceName}?`}
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
        confirm='Удалить'
        cancel='Отказаться'
      />
    </>
  );
};
