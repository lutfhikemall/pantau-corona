import format from 'date-fns/format';
import { id } from 'date-fns/esm/locale';

export const date = (timestamp) => {
    if (!timestamp) {
        return null;
    }
    return format(new Date(timestamp), "EEEE, dd LLL yyyy kk:mm 'WIB'", {locale: id})
}