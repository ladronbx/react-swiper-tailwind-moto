import { useMediaQuery } from 'react-responsive'
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroBlock.css';
import { ResponsiveHeroBlockxl } from '../ResponsiveHeroBlockxl/ResponsiveHeroBlockxl';
import { ResponsiveHeroBlocklg } from '../ResponsiveHeroBlocklg/ResponsiveHeroBlocklg';
import { ResponsiveHeroBlockmd } from '../ResponsiveHeroBlockmd/ResponsiveHeroBlockmd';

export const HeroBlock = () => {
  const isResponsiveHeroBlockxl = useMediaQuery({ minDeviceWidth: 1024 })
  const isResponsiveHeroBlocklg = useMediaQuery({ minDeviceWidth: 768 })
  const isResponsiveHeroBlockmd = useMediaQuery({ minDeviceWidth: 640 })

  const renderComponent = () => {
    if (isResponsiveHeroBlockxl) {
      return <ResponsiveHeroBlockxl />;
    } else if (isResponsiveHeroBlocklg) {
      return <ResponsiveHeroBlocklg />;
    } else if (isResponsiveHeroBlockmd) {
      return <ResponsiveHeroBlockmd />;
    }
  };

  return (
    <>
      {renderComponent()}
    </>
  );
}