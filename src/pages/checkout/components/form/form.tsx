import Input from './components/input/input.component';
import Radio from './components/radio/radio.component';

export default function Form() {
  return (
    <div className="grid gap-y-8 rounded-lg bg-white p-6">
      <h1 className="heading-small">Checkout</h1>
      <div>
        <h2 className="sub-title mb-4 text-orange-700">Billing Details</h2>
        <div className="grid gap-y-6">
          <Input
            type="text"
            label="Name"
            placeholder="Alexei Ward"
            name="name"
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="alexei@mail.com"
            name="email"
          />
          <Input
            type="text"
            label="Phone Number"
            placeholder="+1 202-555-0136"
            name="phone"
          />
        </div>
      </div>
      <div>
        <h2 className="sub-title mb-4 text-orange-700">Shipping Info</h2>
        <div className="grid gap-y-6">
          <div>
            <Input
              type="text"
              label="Your Address"
              placeholder="1137 Williams Avenue"
              name="address"
            />
          </div>
          <Input type="text" label="ZIP Code" placeholder="10001" name="zip" />
          <Input type="text" label="City" placeholder="New York" name="city" />
          <Input
            type="text"
            label="Country"
            placeholder="United States"
            name="country"
          />
        </div>
      </div>
      <div>
        <h2 className="sub-title mb-4 text-orange-700">Payment Details</h2>
        <div className="grid gap-y-6">
          <div>
            <Radio />
          </div>
          <Input
            type="text"
            label="e-Money Number"
            placeholder="238521993"
            name="emoneynumber"
          />
          <Input
            type="text"
            label="e-Money PIN"
            placeholder="6891"
            name="emoneypin"
          />
        </div>
      </div>
    </div>
  );
}
