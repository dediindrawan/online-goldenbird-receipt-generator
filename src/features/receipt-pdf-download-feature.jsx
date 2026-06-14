import { Document, Page, Text, View } from "@react-pdf/renderer";

export const ReceiptPDFDownload = ({ receipt }) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Customer: {receipt.customerName}</Text>

        <Text>Amount: {receipt.amount}</Text>
      </View>
    </Page>
  </Document>
);
