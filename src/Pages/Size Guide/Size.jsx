import React from "react";
import "./Size.css";

const SizeGuide = () => {
  return (
    <div className="sizeguide_container container py-5">
      
      <p className="sizeguide_breadcrumb mb-5">
        <span className="text-warning">Home</span> / sizeguide
      </p>

      <h2 className="sizeguide_title mb-3">Size Guide</h2>

      <p className="sizeguide_desc mb-4">
        If you need assistance when choosing your size, don’t hesitate to -{" "}
        <span className="sizeguide_link">contact us</span>. All sizes shown in the
        Size Charts are approximate. Please shop carefully and refer to our Size
        Chart to ensure the best fit.
      </p>

      <div className="table-responsive">
        <table className="table sizeguide_table">
          <thead className="sizeguide_table_head">
            <tr>
              <th>Our size</th>
              <th>Size</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>6</td>
              <td>79 - 81</td>
              <td>63 - 66</td>
              <td>91 - 94</td>
            </tr>
            <tr>
              <td>S</td>
              <td>8</td>
              <td>86 - 89</td>
              <td>67 - 70</td>
              <td>95 - 98</td>
            </tr>
            <tr>
              <td>M</td>
              <td>10</td>
              <td>89 - 92</td>
              <td>71 - 74</td>
              <td>99 - 102</td>
            </tr>
            <tr>
              <td>L</td>
              <td>12</td>
              <td>92 - 95</td>
              <td>74 - 77</td>
              <td>102 - 105</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>14</td>
              <td>104 - 107</td>
              <td>86 - 89</td>
              <td>111 - 114</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="sizeguide_note mt-3">
        * All measurements are in centimeters (cm).
      </p>
    </div>
  );
};

export default SizeGuide;