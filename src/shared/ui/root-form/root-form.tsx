"use client";

import { ReactElement, ReactNode } from "react";
import { FormProvider, UseFormReturn, FieldValues, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

type RootFormProps<T extends FieldValues> = {
  methods: UseFormReturn<T>;
  children: ReactNode;
  onSubmit?: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  className?: string;
};

function RootForm<T extends FieldValues>({
  children,
  methods,
  className,
  onSubmit,
  onError
}: RootFormProps<T>): ReactElement {
  const errorHandler: SubmitErrorHandler<T> = (errors): void => {
    console.log(errors);
    onError?.(errors);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && methods.handleSubmit(onSubmit, errorHandler)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}

export default RootForm;
