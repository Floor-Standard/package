document.addEventListener("DOMContentLoaded", (event) => {
    const element = document.getElementById('mikawaya-retail-media-cv');
    if (element) {
        element.onclick = function () {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            const utmCampaign = params.get('utm_campaign');
            const api_url = `https://asia-northeast1-mikawaya-staging.cloudfunctions.net/api-gateway-storefront/api/v1/retail-media/campaigns/${utmCampaign}/cv`;
            fetch(api_url, {
                method: "PUT",
            })
        }
    }
});
