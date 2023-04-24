enum Device {
  DESKTOP = 1700,
  TABLET = 1240,
  PHONE = 576
}

export const deviceSize = {
  desktop: `@media (min-width: ${Device.DESKTOP})`,
  tablet: `@media (min-width: ${Device.TABLET})`,
  phone: `@media (min-width: ${Device.PHONE})`
};
