const purchase = data => {
  const getItems = () => {
    let template = '';

    data.product.forEach(item => {
      template += `
        <div style="font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px ; text-transform: uppercase;">
        <h3>
            ${item.brand} - ${item.name} 
        </h3>
        <p>Price paid: $ ${item.price}</p>
        <p>Purchase order: ${item.porder}</p>
      </div>
      `;
    });

    return template;
  };

  return `
  
  <!DOCTYPE html>
  <html style="margin: 0; padding: 0;">
  
      <head>
          <title>One | Email template!</title>
      </head>
  
          <body style="margin: 0; padding: 0;">
              <table class="table" cellpadding="0" cellspacing="0" style="background-color: #eee; empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;">
                  <tr>
                      <td style="background-color: #999592; margin: 0 auto;">
                          <h1 style="box-sizing: border-box; color: white; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; text-transform: uppercase;">Thank you for buying</h1></td>
                  </tr>
                  <tr>
                      <td style="margin: 0 auto;">
                           <h2 style="box-sizing: border-box; color: #000000; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; text-transform: uppercase;">Your purchase information</h2>
                           
                           ${getItems()}
                          
                      </td>
                  </tr>
                  <tr>
                       <td style="background-color: #999592; margin: 0 auto;">
                               <p style="box-sizing: border-box; color: white; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; text-transform: uppercase;font-size:10px">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                               </p></td>
                  </tr>
              </table>
          </body>
  
    </html>
  
  `;
};
module.exports = { purchase };
