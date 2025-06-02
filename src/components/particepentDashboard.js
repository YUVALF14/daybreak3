<Dialog
  open={openRegistrationDialog}
  onClose={() => setOpenRegistrationDialog(false)}
  maxWidth="xs"
  fullWidth
  dir="rtl"
>
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
  </DialogActions>
</Dialog>
