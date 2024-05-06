export default {
    async fetch(request, env) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Max-Age": "86400",
        };

        if (request.method !== "POST")
            return new Response("Not Allowed.", { status: 405 });

        const { url } = request;

        if (url.includes("general-enquiry")) {
            const body = await readRequestBody(request);
            const errors = validateGeneralEnquiryForm(body);

            if (Object.keys(errors).length) {
                return new Response(JSON.stringify(errors), { status: 403 });
            }

            /*
                    const body = {
                      fullname: "Ralphius",
                      packagename: "Mangrove Cave in Wakanda",
                      weddingdate: "now",
                      tier : "Silver",
                      extraguests: "5",
                      packageprice: 2000,
                      totalquote: 2500,
                      email : "george@gmail.com",
                      phone: "+62812345678",
                      message: "message!"
                      };*/

            const response = await sendGeneralEnquiry(body);

            if (response.statusText == "OK") {
                return new Response("OK", { status: 200, headers: { ...corsHeaders } });
            } else {
                return new Response("Something went wrong", {
                    status: 500,
                    headers: { ...corsHeaders },
                });
            }
        }
    },
};

/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
async function readRequestBody(request) {
    const { headers } = request;
    const contentType = headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
        return JSON.stringify(await request.json());
    } else if (contentType.includes("application/text")) {
        return request.text();
    } else if (contentType.includes("text/html")) {
        return request.text();
    } else if (contentType.includes("form")) {
        const formData = await request.formData();
        const body = {};
        for (const entry of formData.entries()) {
            body[entry[0]] = entry[1];
        }
        return body;
        return JSON.stringify(body);
    } else {
        // Perhaps some other type of data was submitted in the form
        // like an image, or some other binary data.
        return "a file";
    }
}

/*
 *   Email Templates Start
 */

async function sendGeneralEnquiry(formData) {
    const subject = `${formData.fullname} sent a general enquiry`;

    const legal_entity = formData.legal - entity ?
        `Rechtsvorm: ${formData.legal-entity} \n` :
        "";
    const number_invoices =
        formData.number_invoices && formData.number_invoices > 0 ?
        `Aantal in/verkoop bonnetjes per maand: ${formData.number_invoices} \n` :
        "";

    const preferred_services =
        formData.preferred_services && formData.preferred_services > 0 ?
        `Wat wil je graag uitbesteden: ${formData.preferred_services} \n` :
        "";

    const delivery_method =
        formData.delivery_method && formData.delivery_method > 0 ?
        `Hoe wil je de administratie aanleveren: ${formData.delivery_method} \n` :
        "";

    const messageBody = `
        Full Name: ${formData.fullname} \n
        ${legal_entity}
        ${number_invoices}
        ${preferred_services}
        ${delivery_method }
        Email: ${formData.email} \n
        Telefoonnummer: ${formData.phone} \n
        Bericht:  ${formData.message} \n`;

    return await sendMail(
        subject,
        formData.fullname,
        formData.email,
        messageBody
    );
}

/*
 *   Email Templates End
 */

/*
 *   Email Sending Start
 */

async function sendMail(subject, senderName, senderEmail, messageBody) {
    const apiKey = "api-797209FEADBA11ED8B92F23C91C88F4E";

    return fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: apiKey,
                to: ["Boekhouder 't Gooi' <enquiries@boekhouder-het-gooi.nl>"],
                sender: `${senderName} <info@nomadicowls.com>`,
                subject: subject,
                text_body: messageBody,
                custom_headers: [{
                    header: "Reply-To",
                    value: `${senderName} <${senderEmail}>`,
                }, ],
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return new Response(response.json());
        })
        .then((data) => {
            return new Response(data);
        })
        .catch((error) => {
            return new Response(
                `Er is een probleem: ${error}`
            );
        });
}

/*
 *   Email sending End
 */

/*
 *   Validation functions Start
 *   Note to self: use ChatGPT
 */

function validateGeneralEnquiryForm(formData) {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.fax) {
        errors.fax = "You provided a fax?";
    }

    if (!formData.fullname) {
        errors.fullname = "Full name is required";
    }

    if (!formData.phone) {
        errors.phone = "Phone number is missing";
    }

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "Invalid email address";
    }

    if (!formData.message) {
        errors.message = "Message is required";
    }

    return errors;
}

/*
 *   Validation functions end
 */