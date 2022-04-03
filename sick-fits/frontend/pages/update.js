/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct.jsx';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateProduct id={query?.id} />
    </div>
  );
}
