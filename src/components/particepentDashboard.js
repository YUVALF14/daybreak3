import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Checkbox, FormControlLabel, Snackbar } from '@mui/material';
<Dialog
  open={openRegistrationDialog}
  onClose={() => setOpenRegistrationDialog(false)}
  maxWidth="xs"
  fullWidth
  dir="rtl"
>
    const handleRegistration = (event, formData) => {
  // טפול בנתונים
  if (!formData.name.trim() || !formData.phone.trim() || !formData.legal) {
    setSnackbar({
      open: true,
      message: 'נא למלא את כל הפרטים ולאשר את התקנון',
      severity: 'error'
    });
    return;
  }

  // טען עותק עדכני של האירועים
  const savedEvents = localStorage.getItem('yjccEvents');
  const eventsArr = savedEvents ? JSON.parse(savedEvents) : [];
  const eventIndex = eventsArr.findIndex(e => e.id === event.id);
  if (eventIndex === -1) {
    setSnackbar({
      open: true,
      message: 'אירוע לא נמצא',
      severity: 'error'
    });
    return;
  }

  // בדוק אם כבר נרשם
  const already = eventsArr[eventIndex].participants?.find(p => p.phone === formData.phone);
  if (already) {
    setSnackbar({
      open: true,
      message: 'את/ה כבר רשום/ה לאירוע הזה',
      severity: 'warning'
    });
    return;
  }

  // הוסף משתתף
  const newParticipant = {
    name: formData.name,
    phone: formData.phone,
    paid: false,
    confirmed: false,
    attended: false,
    legal: true
  };
  if (!eventsArr[eventIndex].participants) eventsArr[eventIndex].participants = [];
  eventsArr[eventIndex].participants.push(newParticipant);

  localStorage.setItem('yjccEvents', JSON.stringify(eventsArr));
  setSnackbar({
    open: true,
    message: `נרשמת בהצלחה לאירוע "${event.name}"! 🎉`,
    severity: 'success'
  });
  setEvents(eventsArr);
};
  <DialogTitle>הרשמה לאירוע - {registrationEvent?.name}</DialogTitle>
  <DialogContent>
    <TextField
      label="שם מלא"
      value={registrationData.name}
      onChange={e => setRegistrationData({ ...registrationData, name: e.target.value })}
      fullWidth
      sx={{ my: 1 }}
    />
    <TextField
      label="מספר ווצאפ"
      value={registrationData.phone}
      onChange={e => setRegistrationData({ ...registrationData, phone: e.target.value })}
      fullWidth
      sx={{ my: 1 }}
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={registrationData.legal}
          onChange={e => setRegistrationData({ ...registrationData, legal: e.target.checked })}
        />
      }
      label="אני מאשר/ת את תקנון YJCC"
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenRegistrationDialog(false)}>
      ביטול
    </Button>
    <Button
      variant="contained"
      disabled={
        !registrationData.name.trim() ||
        !registrationData.phone.trim() ||
        !registrationData.legal
      }
      onClick={() => {
        handleRegistration(registrationEvent, registrationData);
        setOpenRegistrationDialog(false);
        setRegistrationData({ name: '', phone: '', legal: false });
      }}
    >
      הרשמה
    </Button>
      <Snackbar
  open={snackbar.open}
  autoHideDuration={6000}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
  message={snackbar.message}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
/>
  </DialogActions>
</Dialog>
