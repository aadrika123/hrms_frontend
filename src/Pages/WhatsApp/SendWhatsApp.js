import axios from 'axios';
import React, { useState } from 'react'

function SendWhatsApp() {
    const [phone, setPhone] = useState()
    const [textArea, setTextArea] = useState()

    const header = {
        headers: {
            Authorization: `Bearer EAAHGZA6T1f44BAHQXZB0z6PHdX6Ya11YxNAndjdsVld2WHeWpMs1zuQAX2AHwIDFjqyHgLmdwNi2cueBMJz99taTovd6WtX1OKVFaftQLrlGTIwmcOq0PiCqzXOML5s1KwFZBD4ydrPLVs4nKYL0y5B7PgTtSkK9kukRJFltfUs9L673KIEfuXTDCXsw6ZCRzFfg5ZB00PAZDZD`,
            Accept: 'application/json'
        }
    }

    // https://developers.facebook.com/apps/499623428194190/whatsapp-business/wa-dev-console/?business_id=387308665166932

    const handleSendBtn = () => {
        const mobileNo = +91 + phone;
        console.log("dat", mobileNo, textArea)
        const config = {
            headers: { Authorization: `Bearer EAAHGZA6T1f44BAHQXZB0z6PHdX6Ya11YxNAndjdsVld2WHeWpMs1zuQAX2AHwIDFjqyHgLmdwNi2cueBMJz99taTovd6WtX1OKVFaftQLrlGTIwmcOq0PiCqzXOML5s1KwFZBD4ydrPLVs4nKYL0y5B7PgTtSkK9kukRJFltfUs9L673KIEfuXTDCXsw6ZCRzFfg5ZB00PAZDZD` }
        };

        const bodyParameters = {
            messaging_product: "whatsapp",
            to: mobileNo,
            type: "template",
            template: {
                name: "tra_dipu",
                language: {
                    "code": "en_US"
                }
            }
        };

        axios.post(
            'https://graph.facebook.com/v15.0/102015186006727/messages',
            bodyParameters,
            config
        ).then(console.log).catch(console.log);
    }

    return (
        <>
            <div className='bg-indigo-50 w-1/3 p-5 border shadow-xl rounded-sm m-auto mt-10 grid justify-center'>
                <div>
                    <h1 className='text-xl font-semibold py-2'>Send Message To WhatsApp</h1>
                </div>
                <div>
                    <p>Phone</p>
                    <input onChange={(e) => setPhone(e.target.value)} className='w-60 py-1 px-2 border border-black rounded-md' type="text" name="number" />
                </div>
                <div>
                    <p>Message</p>
                    <textarea onChange={(e) => setTextArea(e.target.value)} className='w-60 h-20 py-1 px-2 border border-black rounded-md' name="textArea" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='flex justify-center py-5'>
                    <button onClick={handleSendBtn} className='bg-green-500 px-2 py-1 rounded-sm'>Send Message</button>
                </div>
            </div>
        </>
    )
}

export default SendWhatsApp