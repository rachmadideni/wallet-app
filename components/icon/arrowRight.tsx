import * as React from 'react';

const ArrowRight = ({ className }:{ className?: string }) => {
  return (
    <svg width="12" height="12" className={className} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.293458 1.7929C-0.0963294 1.40312 -0.0942035 0.769019 0.293762 0.381054L0.381608 0.293208C0.771564 -0.0967477 1.40119 -0.0993609 1.79567 0.295118L6.8797 5.37914C7.27071 5.77015 7.27418 6.40064 6.8797 6.79512L1.79567 11.8791C1.40466 12.2702 0.769574 12.269 0.381608 11.8811L0.293762 11.7932C-0.0961935 11.4033 -0.0995424 10.7744 0.293458 10.3814L4.58769 6.08713L0.293458 1.7929Z" />
    </svg>
  )
}

export default ArrowRight;