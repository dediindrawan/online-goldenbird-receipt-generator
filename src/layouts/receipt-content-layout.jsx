import { ReceiptAmountNumberSignFeature } from "../features/receipt-amount-number-sign-feature";
import { ReceiptContentFeature } from "../features/receipt-content-feature";
import { useDisplayInputField } from "../hooks/use-display-input-field";

export const ReceiptContentLayout = () => {
  const {
    displayCustomerName,
    displayAmountWords,
    displayBookingCode,
    displayPeriodeUsage,
    displayNoteExplanation,
    displayAmountNumber,
    displaySignTypeDate,
  } = useDisplayInputField();

  return (
    <article>
      <ReceiptContentFeature
        contentTitle={"Customer Name"}
        contentDescription={displayCustomerName}
      />
      <ReceiptContentFeature
        contentTitle={"Amount"}
        contentDescription={displayAmountWords}
      />
      <br /> <br />
      <ReceiptContentFeature
        contentTitle={"Booking Code"}
        contentDescription={displayBookingCode}
      />
      <ReceiptContentFeature
        contentTitle={"Periode of Car Usage"}
        contentDescription={displayPeriodeUsage}
      />
      <p className="mt-8">{displayNoteExplanation}</p>
      <ReceiptAmountNumberSignFeature
        contentPrice={displayAmountNumber}
        contentDate={displaySignTypeDate}
      />
    </article>
  );
};
