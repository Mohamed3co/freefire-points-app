<?php
// إعداد الهيدر لإرجاع JSON
header('Content-Type: application/json');

// رابط الـ API الخاص بـ CPAGrip
$url = "https://www.cpagrip.com/common/offer_feed_json.php?user_id=2407883&key=3f2682325b819c43e34f23f6d074a4c8&country=US&limit=10&showall=true";

// جلب البيانات
$response = file_get_contents($url);

// لو فشل الجلب
if ($response === FALSE) {
    http_response_code(500);
        echo json_encode(["error" => "فشل في جلب العروض"]);
            exit;
            }

            // تحويل الرد لـ JSON
            $data = json_decode($response, true);

            // إرجاع البيانات كما هي
            echo json_encode([
                "offers" => $data["offers"] ?? []
                ]);
                ?>