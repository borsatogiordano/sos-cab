"use client";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";

type DistanceInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
};

const distanceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "decimal",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export default function DistanceInput(props: DistanceInputProps) {
  const [displayValue, setDisplayValue] = useState("");

  // Inicializar o valor do display
  useEffect(() => {
    const currentValue = props.form.getValues()[props.name];
    if (currentValue && currentValue > 0) {
      setDisplayValue(`${distanceFormatter.format(currentValue)} km`);
    }
  }, [props.form, props.name]);

  function formatDistance(digits: string): string {
    if (digits === "") return "";
    const number = Number(digits) / 10;
    return `${distanceFormatter.format(number)} km`;
  }

  function handleInputChange(
    inputValue: string,
    onChange: Function,
    inputRef?: HTMLInputElement
  ) {
    if (inputValue === "") {
      setDisplayValue("");
      onChange(0);
      return;
    }

    const digits = inputValue.replace(/\D/g, "");

    if (digits === "") {
      setDisplayValue("");
      onChange(0);
      return;
    }

    const formatted = formatDistance(digits);
    setDisplayValue(formatted);

    const realValue = Number(digits) / 10;
    onChange(realValue);

    if (inputRef && formatted.includes(" km")) {
      setTimeout(() => {
        const cursorPosition = formatted.length - 3; // antes do " km"
        inputRef.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={props.placeholder}
              type="text"
              value={displayValue}
              onChange={(e) =>
                handleInputChange(e.target.value, field.onChange, e.target)
              }
              onBlur={field.onBlur}
              onClick={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.value.includes(" km")) {
                  const cursorPosition = input.value.length - 3;
                  input.setSelectionRange(cursorPosition, cursorPosition);
                }
              }}
              onFocus={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.value.includes(" km")) {
                  setTimeout(() => {
                    const cursorPosition = input.value.length - 3;
                    input.setSelectionRange(cursorPosition, cursorPosition);
                  }, 0);
                }
              }}
              name={field.name}
              ref={field.ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
