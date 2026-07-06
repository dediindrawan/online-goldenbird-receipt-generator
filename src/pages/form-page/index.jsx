import { InputLayout } from "../../layouts/input-layout";
import { TextareaLayout } from "../../layouts/textarea-layout";
import { useInputField } from "../../hooks/use-input-field";

export const InputFormGroup = () => {
  const {
    customerName,
    amountWords,
    bookingCode,
    periodeUsage,
    noteExplanation,
    amountNumber,
    inputCustomerNameHandleChange,
    inputAmountWordsHandleChange,
    inputBookingCodeHandleChange,
    inputPeriodeUsageHandleChange,
    inputNoteExplanationHandleChange,
    inputAmountNumberHandleChange,
  } = useInputField();

  return (
    <form>
      <div className="mb-4 w-full flex flex-col flex-wrap grow gap-4 sm:flex-row">
        <InputLayout
          className="capitalize"
          id="customer-name-input"
          labelText="Customer Name:"
          placeholder="EG: Mr. John Doe"
          value={customerName}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputCustomerNameHandleChange(e)}
        />
        <InputLayout
          className="uppercase"
          id="booking-code-input"
          labelText="Booking Code or Order Number:"
          placeholder="EG: HO12345678"
          value={bookingCode}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputBookingCodeHandleChange(e)}
        />
        <InputLayout
          id="car-usage-input"
          labelText="Periode of Car Usage:"
          type="date"
          value={periodeUsage}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputPeriodeUsageHandleChange(e)}
        />
        <InputLayout
          className="capitalize"
          id="idr-amount-word-input"
          labelText="IDR Amount in Words:"
          placeholder="EG: Five Hundred Thousand"
          value={amountWords}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputAmountWordsHandleChange(e)}
        />
        <InputLayout
          id="idr-amount-number-input"
          labelText="IDR Amount in Number:"
          type="text"
          placeholder="EG: 500000"
          value={`IDR. ${amountNumber}`}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputAmountNumberHandleChange(e)}
        />
      </div>
      <TextareaLayout
        id="note-explanation-input"
        labelText="Note Explanation:"
        placeholder="EG: Goldenbird car payment for BYD Denza D9 ..."
        value={noteExplanation}
        onFocus={(e) => {
          e.target.select();
        }}
        onChange={(e) => inputNoteExplanationHandleChange(e)}
      />
    </form>
  );
};
