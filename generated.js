import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GeneratedPage = () => {
  const router = useRouter();
  const { picture } = router.query;

  useEffect(() => {
    if (picture) {
      const generatedPicture = document.getElementById('generated-picture');
      generatedPicture.src = picture;
    }
  }, [picture]);

  return (
    <div>
      <h1>Generated Profile Picture</h1>
      <img id="generated-picture" alt="Generated Picture" />
    </div>
  );
};

export default GeneratedPage;
