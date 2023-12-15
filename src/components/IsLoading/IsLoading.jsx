import { SpinnerDotted } from 'spinners-react';

export const IsLoading = () => {
  return (
    <SpinnerDotted
      size={70}
      thickness={100}
      speed={100}
      color='rgba(195, 250, 228, 1)'
    />
  );
};
