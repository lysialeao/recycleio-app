export const formatDate = ({ date }) => {

  const dateiso = new Date(date)

  const formattedDate = dateiso.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long'
  });

  const formattedTime = dateiso.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      hour12: false,
      minute: undefined
  });

  const finalDate = `${formattedDate} às ${formattedTime}h`;

  return finalDate
}
