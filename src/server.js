import app from '../config/api'
import 'dotenv/config'

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`App running in port ${PORT}`))