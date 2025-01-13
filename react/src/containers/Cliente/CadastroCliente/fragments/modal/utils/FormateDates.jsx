import { parse, format, isValid, parseISO } from 'date-fns';

export const formatDateForInput = (date) => {
    if (!date) return '';
    const parsedDate = parseISO(date);
    if (!isValid(parsedDate)) return '';
    return format(parsedDate, 'dd/MM/yyyy');
};

export const formatDateToBackend = (date) => {
    if (!date) return '';
    const dataQueVeioDoInput = parse(date, 'dd/MM/yyyy', new Date());
    if (!isValid(dataQueVeioDoInput)) return '';
    return format(dataQueVeioDoInput, 'yyyy-MM-dd');
};
