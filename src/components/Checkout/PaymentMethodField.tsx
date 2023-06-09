import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/Form";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";

import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FormData } from "./CheckoutForm";

interface AddressFieldsProps {
    form: UseFormReturn<FormData>;
}

export const PaymentMethodField = ({ form }: AddressFieldsProps) => {
    return (
        <footer className="mt-3 rounded-md bg-base-card p-10">
            <header className="flex items-start gap-2">
                <CurrencyDollar className=" h-6 w-6 text-purple-dark" />
                <div className="flex flex-col items-start">
                    <p className="text-base-subtitle">Pagamento</p>
                    <p className="text-sm text-base-text">
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                    </p>
                </div>
            </header>

            <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                    <FormControl className="mt-8">
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-3"
                        >
                            <FormItem className={"relative flex items-center"}>
                                <FormControl className="absolute opacity-0">
                                    <RadioGroupItem value="credit-card" />
                                </FormControl>
                                <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                    <CreditCard className="h-4 w-4 text-purple" />
                                    Cartão de crédito
                                </FormLabel>
                            </FormItem>

                            <FormItem className="relative flex items-center">
                                <FormControl className="absolute opacity-0">
                                    <RadioGroupItem value="debit-card" />
                                </FormControl>
                                <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                    <Bank className="h-4 w-4 text-purple" />
                                    cartão de débito
                                </FormLabel>
                            </FormItem>

                            <FormItem className="relative flex items-center">
                                <FormControl className="absolute opacity-0">
                                    <RadioGroupItem value="fiat" />
                                </FormControl>
                                <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                    <Money className="h-4 w-4 text-purple" />
                                    dinheiro
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                )}
            />
        </footer>
    );
};
