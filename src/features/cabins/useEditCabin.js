import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCreateCabin } from './useCreateCabin'
import toast from 'react-hot-toast'
import { createEditCabin } from '../../services/apiCabins'

export function useEditCabin() {
  const queryClient = useQueryClient()

  const { isCreating, createCabin } = useCreateCabin()

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin),
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => toast.error(err.message),
  })
  return { isEditing, editCabin }
}
