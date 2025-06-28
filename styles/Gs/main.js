// public/js/main.js

document.addEventListener("DOMContentLoaded", async () => {
  const offersContainer = document.getElementById("offers-container");

    // عرض عنصر التحميل من components/loadingSpinner.html
      const spinnerHtml = await fetch("/components/loadingSpinner.html").then(res => res.text());
        offersContainer.innerHTML = spinnerHtml;

          try {
              const response = await fetch("https://ffrewards.infinityfreeapp.com/api/proxy.php");
                  const data = await response.json();

                      // إزالة عنصر التحميل
                          offersContainer.innerHTML = "";

                              if (data.offers && data.offers.length > 0) {
                                    // جلب قالب البطاقة من components/offerCard.html
                                          const cardTemplate = await fetch("/components/offerCard.html").then(res => res.text());

                                                data.offers.forEach(offer => {
                                                        let offerHtml = cardTemplate
                                                                  .replace("{IMAGE_URL}", offer.offerphoto)
                                                                            .replace("{TITLE}", offer.title)
                                                                                      .replace("{DESCRIPTION}", offer.description || "")
                                                                                                .replace("{COUNTRY}", offer.accepted_countries)
                                                                                                          .replace("{POINTS}", Math.floor(parseFloat(offer.payout) * 100))
                                                                                                                    .replace("{OFFER_LINK}", offer.offerlink);

                                                                                                                            offersContainer.innerHTML += offerHtml;
                                                                                                                                  });
                                                                                                                                      } else {
                                                                                                                                            // لا توجد عروض - رسالة خاصة
                                                                                                                                                  offersContainer.innerHTML = `
                                                                                                                                                          <div style="text-align:center; padding:20px;">
                                                                                                                                                                    <h3>لا توجد عروض حالياً</h3>
                                                                                                                                                                              <p>يرجى المحاولة لاحقاً.</p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                            `;
                                                                                                                                                                                                }
                                                                                                                                                                                                  } catch (err) {
                                                                                                                                                                                                      offersContainer.innerHTML = `
                                                                                                                                                                                                            <div style="color:red; text-align:center;">
                                                                                                                                                                                                                    <p>حدث خطأ أثناء جلب العروض، يرجى المحاولة لاحقاً.</p>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                              `;
                                                                                                                                                                                                                                  console.error("Error fetching offers:", err);
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    });