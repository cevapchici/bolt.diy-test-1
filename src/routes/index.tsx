import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import { MemorialPortal } from '../features/memorial-portal';
import { FuneralWizard } from '../features/funeral-wizard';
import { Pricing } from '../features/pricing';
import { Contact } from '../features/contact';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FuneralWizard />} />
        <Route path="memorial" element={<MemorialPortal />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
