"use client";
import { type ReactElement, useId, useRef, useState } from "react";
import { type ClassNames, DayPicker } from "@daypicker/react";
import { fr as frCalendar } from "@daypicker/react/locale";
import { startOfToday } from "date-fns";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatDateLabel, formatWeekdayName, toFormValue } from "@/lib/dates";

const DateField = (): ReactElement => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const popoverId: string = useId();
  const popoverRef = useRef<HTMLDivElement>(null);
  const today: Date = startOfToday();

  const handleSelect = (day: Date): void => {
    setDate(day);
    popoverRef.current?.hidePopover();
  };

  return (
    <li className={styles.item}>
      <button type="button" popoverTarget={popoverId} className={styles.trigger}>
        <span className="search-field-icon">
          <Calendar className="size-[22px]" aria-hidden="true" />
        </span>
        <span className="search-field-label">Quand ?</span>
        <span className={cn(styles.value, !date && "text-slate-400")}>{formatDateLabel(date)}</span>
      </button>

      <input type="hidden" name="date" value={toFormValue(date)} />

      <div ref={popoverRef} id={popoverId} popover="auto" className={styles.panel}>
        <DayPicker
          mode="single"
          required
          selected={date}
          onSelect={handleSelect}
          locale={frCalendar}
          disabled={{ before: today }}
          startMonth={today}
          formatters={{ formatWeekdayName }}
          classNames={calendarClassNames}
        />
      </div>
    </li>
  );
};

export default DateField;

const styles = {
  item: "group/date search-divider [anchor-name:--date-field] md:flex-[3]",
  trigger: cn(
    "group search-field cursor-pointer",
    "group-has-[:popover-open]/date:border-glacier-200 group-has-[:popover-open]/date:bg-white/80",
  ),
  value: "search-field-value first-letter:uppercase",
  panel: cn(
    "inset-auto m-0 mt-2 w-80 rounded-2xl border border-glacier-200/80 bg-white p-5 shadow-2xl",
    "[position-anchor:--date-field] [position-area:bottom_span-right]",
    "[position-try-fallbacks:flip-block]",
  ),
} as const;

const chevronButton: string = cn(
  "flex size-8 items-center justify-center rounded-full text-ice-dark transition",
  "hover:bg-glacier-100",
  "aria-disabled:pointer-events-none aria-disabled:opacity-30",
);

const calendarClassNames: Partial<ClassNames> = {
  months: "relative",
  month_caption: cn(
    "flex h-8 items-center",
    "font-display text-base font-medium tracking-tight text-ice-dark capitalize",
  ),
  nav: "absolute top-0 right-0 z-10 flex gap-1",
  button_previous: chevronButton,
  button_next: chevronButton,
  chevron: "size-4 fill-current",
  month_grid: "mt-4 w-full border-collapse",
  weekday: "py-1 text-label font-semibold text-slate-400 uppercase",
  day: "p-0.5 text-center",
  day_button: cn(
    "mx-auto flex size-9 items-center justify-center rounded-full",
    "text-xs text-ice-dark transition hover:bg-glacier-100",
    "focus-visible:outline-2 focus-visible:outline-glacier-400",
  ),
  today: "[&>button]:font-bold [&>button]:text-glacier-500",
  selected: cn(
    "[&>button]:bg-glacier-900 [&>button]:shadow-md",
    "[&>button]:font-semibold [&>button]:text-white!",
  ),
  disabled: "pointer-events-none [&>button]:text-slate-400",
};
