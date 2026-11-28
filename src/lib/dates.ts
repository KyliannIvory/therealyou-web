import { format, isToday, isTomorrow } from "date-fns";
import { fr } from "date-fns/locale";

export const formatDateLabel = (date: Date | undefined): string => {
  if (!date) return "Choisir une date";
  if (isToday(date)) return "Aujourd'hui";
  if (isTomorrow(date)) return "Demain";
  return format(date, "EEEE d MMMM", { locale: fr });
};

export const toFormValue = (date: Date | undefined): string => {
  return date ? format(date, "yyyy-MM-dd") : "";
};

export const formatWeekdayName = (day: Date): string => {
  return format(day, "EEE", { locale: fr }).replace(".", "");
};
