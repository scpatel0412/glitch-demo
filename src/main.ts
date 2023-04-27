import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCaV4RYviR3EdZZjQbM8dxPQsPcu8jp9Zc",
  //   authDomain: "nestjs-demo-b9990.firebaseapp.com",
  //   projectId: "nestjs-demo-b9990",
  //   storageBucket: "nestjs-demo-b9990.appspot.com",
  //   messagingSenderId: "750515426889",
  //   appId: "1:750515426889:web:9ca38bb2d092594874d198",
  //   measurementId: "G-T7N97BVL0R"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}
bootstrap();
