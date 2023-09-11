import { collectionStatus } from "../enum/status"

export const formatStatusCollection = ({ collection_status }) => {
  if (collection_status === collectionStatus.SCHEDULED) return 'Agendado'
}