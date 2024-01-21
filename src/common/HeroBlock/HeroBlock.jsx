import { useMediaQuery } from 'react-responsive';
import './HeroBlock.css';
import { ResponsiveHeroBlockxl } from '../ResponsiveHeroBlockxl/ResponsiveHeroBlockxl';
import { ResponsiveHeroBlocklg } from '../ResponsiveHeroBlocklg/ResponsiveHeroBlocklg';
import { ResponsiveHeroBlockmd } from '../ResponsiveHeroBlockmd/ResponsiveHeroBlockmd';

export const HeroBlock = () => {
  const isResponsiveHeroBlockxl = useMediaQuery({ minDeviceWidth: 1200 })
  const isResponsiveHeroBlocklg = useMediaQuery({ minDeviceWidth: 768 })
  const isResponsiveHeroBlockmd = useMediaQuery({ minDeviceWidth: 100 })

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