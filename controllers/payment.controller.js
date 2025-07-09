const { Payment } = require("../models/paymentSchema");

// ----postPayment
exports.postPayment = async (req, res) => {
  try {
    const { name } = req.body;
    const newPayment = new Payment({
      name,
    });
    await newPayment.save();
    return res.status(200).json({
      success: true,
      message: "Payment muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Payment yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getPayment
exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.find({});
    return res.status(200).json({
      success: true,
      message: "Paymentlar ro'yhati!",
      payments: payment,
    });
  } catch (error) {
    console.error("Paymentlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getPaymentById
exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment ma'lumotlari!",
        payment: payment,
      });
    }
  } catch (error) {
    console.error("Payment ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updatePayment
exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment muvaffaqiyatli yangilandi!",
      });
    }
  } catch (error) {
    console.error("Paymentni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deletePayment
exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findByIdAndDelete(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Paymentni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
