import SystemUsageContent from "../data/system-usage-policy-data.json";

export const SystemUsagePolicyContentLayout = () => {
  return (
    <article>
      <h1 className="text-4xl font-semibold mb-2">
        Kebijakan Penggunaan Sistem
      </h1>

      <p className="mb-8">(SOP Internal Ketat)</p>

      <span className="mb-6 flex flex-col gap-4">
        <h2>
          Sistem ini merupakan aplikasi internal yang digunakan untuk membantu
          proses input data dan penerbitan Receipt pemesanan transportasi.
          Sistem ini hanya diperuntukkan bagi tim internal perusahaan yang
          berwenang menjalankan tugas operasional.
        </h2>

        <h2>
          Dengan menggunakan sistem ini, setiap pengguna dianggap telah memahami
          dan menyetujui seluruh ketentuan yang tercantum dalam kebijakan ini.
        </h2>
      </span>

      <ol className="flex flex-col gap-6 list-decimal list-inside marker:font-semibold">
        {SystemUsageContent?.map((item, index) => (
          <li key={index}>
            <h3 className="mb-1 inline-block font-semibold">{item.title}</h3>
            <p>
              {item.heading && item.heading.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {item.heading.map((headingItem, headingIndex) => (
                    <li key={headingIndex}>{headingItem}</li>
                  ))}
                </ul>
              )}
            </p>
            <p className="mt-1">{item.subheading}</p>
            <p>
              {item.list && item.list.length > 0 && (
                <ol className="list-disc ml-4 mt-1">
                  {item.list.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ol>
              )}
            </p>
            <p className="mt-1">
              {item.footer && item.footer.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {item.footer.map((footerItem, footerIndex) => (
                    <li key={footerIndex}>{footerItem}</li>
                  ))}
                </ul>
              )}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
};
