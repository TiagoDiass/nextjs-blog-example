import { format, parseISO } from 'date-fns';
import brLocale from 'date-fns/locale/pt';

export default function Date({ dateString }) {
  const dateFormatted = format(parseISO(dateString), "dd 'de' MMMM 'de' yyyy", {
    locale: brLocale,
  });

  return <time dateTime={dateString}>{dateFormatted}</time>;
}
