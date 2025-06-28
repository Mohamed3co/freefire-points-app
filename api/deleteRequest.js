const express = require("express");
const router = express.Router();
const db = require("../config/firebase");

router.post("/", async (req, res) => {
  const { id } = req.body;
    try {
        await db.collection("withdrawals").doc(id).delete();
            res.json({ success: true, message: "تم الحذف بنجاح" });
              } catch (error) {
                  res.json({ success: false, message: "فشل الحذف", error });
                    }
                    });

                    module.exports = router;