import {SQFormTextField, SQFormDropdown} from '@selectquotelabs/sqform';

const DROPDOWN_OPTIONS = [
  {label: 'Licensed', value: 'Yes'},
  {label: 'Not Licensed', value: 'No'},
];

export default function DialogFields() {
  return (
    <>
      <SQFormTextField
        name="stateName"
        label="State Name"
        type="string"
        size={12}
      />
      <SQFormTextField
        name="other"
        label="Other Field"
        type="string"
        size={12}
      />
      <SQFormDropdown name="licensed" label="Licensed" isDisabled={false}>
        {DROPDOWN_OPTIONS}
      </SQFormDropdown>
    </>
  );
}
