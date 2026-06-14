import { InputLayout } from "../../layouts/input-layout";
import { TextareaLayout } from "../../layouts/textarea-layout";
import { useInputFiled } from "../../hooks/use-input-field";

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
  } = useInputFiled();

  return (
    <form action="">
      <div className="mb-4 flex flex-wrap grow gap-4">
        <InputLayout
          id="customer-name-input"
          labelText="Customer Name:"
          placeholder="Eg: Mr. John Doe"
          value={customerName}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => inputCustomerNameHandleChange(e)}
        />
        <InputLayout
          id="booking-code-input"
          labelText="Booking Code or Order Number:"
          placeholder="Eg: HO12345678"
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
          id="idr-amount-word-input"
          labelText="IDR Amount in Words:"
          placeholder="Eg: Five Hundred Thousand"
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
          placeholder="Eg: 500000"
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
        placeholder="Eg: Goldenbird car payment for BYD Denza D9 ..."
        value={noteExplanation}
        onFocus={(e) => {
          e.target.select();
        }}
        onChange={(e) => inputNoteExplanationHandleChange(e)}
      />
    </form>
  );
};
