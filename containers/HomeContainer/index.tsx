import React from 'react';
import Button from '~/components/primitives/Button';
import { toast } from '~/utils/toast';

function HomeContainer() {
  return (
    <div>
      <Button
        onClick={() => {
          toast.success('Hello');
        }}
      >
        hello
      </Button>
      <Button
        onClick={() => {
          toast.success('Hello', undefined, {
            position: 'top-right',
          });
        }}
      >
        hello
      </Button>
      <w3m-button />
    </div>
  );
}

export default HomeContainer;
