import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Form() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [addSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscriptionSubmit(event: FormEvent) {
    event.preventDefault();
    if (name && email) {
      await addSubscriber({
        variables: {
          name,
          email,
        },
      });
      navigate('/event');
    } else {
      setError('Name and e-mail are required');
    }
  }

  return (
    <div className="bg-gray-700 w-96 p-8 flex flex-col gap-6 rounded text-medium text-gray-100 border-2 border-gray-600">
      <h2 className="text-2xl">Subscribe for free</h2>
      <form onSubmit={handleSubscriptionSubmit} className="flex flex-col gap-2 w-full">
        {error.length > 0 && <span className="p-4 text-red-500 border rounded border-red-500 block text-sm font-bold">{error}</span>}
        <input onChange={event => setName(event.target.value)} value={name} type="text" name="name" id="name" placeholder="Your name" className="p-4 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-green-500" />
        <input onChange={event => setEmail(event.target.value)} value={email} type="email" name="email" id="email" placeholder="Your email" className="p-4 bg-gray-900 rounded outline-none focus:ring-2 focus:ring-green-500" />
        <button disabled={loading} type="submit" className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
