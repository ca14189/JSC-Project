'use client';
import { useFormikContext } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputComponentProps {
  style?: React.CSSProperties;
}

const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({ style }) => {
  const { values, setFieldValue } = useFormikContext<{ phoneNumber: string }>();

  return (
    <PhoneInput
      containerClass="phone-container w-full"
      country={"in"}
      placeholder="Enter phone number"
      onlyCountries={["in"]}
      countryCodeEditable={false}
      value={values.phoneNumber ? `+91${values.phoneNumber}` : ""}
      onChange={(phoneNumber, country, e, formattedValue) => {
        const sanitizedPhoneNumber = formattedValue
          .replace(/^(\+91|91|-)/, "")
          .replace(/-/g, "");
        setFieldValue("phoneNumber", sanitizedPhoneNumber.trim());
      }}
      inputStyle={{
        width: '100%',
        borderRadius: '12px',
        border: '1px solid #ccc',
        padding: '10px 12px 10px 48px',
        height: '48px',
        fontSize: '16px',
        ...style, // merge any custom style passed as prop
      }}
      buttonStyle={{
        borderRadius: '12px 0 0 12px',
        border: '1px solid #ccc',
        borderRight: '0',
        top: '0',
        height: '48px',
      }}
    />

  );
};

export default PhoneInputComponent;
