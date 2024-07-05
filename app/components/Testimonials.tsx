// src/components/Testimonials.tsx

export interface Testimonial {
  id: number;
  imgSrc: string;
  name: string;
  occupation: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    imgSrc: "/assets/images/pep2.png",
    name: "Markin Nesus",
    occupation: "iOS Developer",
    text: "This should be used to tell a story and include any testimonials you might have about your product or service for your clients."
  },
  {
    id: 2,
    imgSrc: "/assets/images/pngwing.com.png",
    name: "Jane Doe",
    occupation: "Android Developer",
    text: "This app has transformed the way I manage my tasks. Highly recommend it!"
  },
  {
    id: 3,
    imgSrc: "/assets/images/pep3.png",
    name: "John Smith",
    occupation: "Web Developer",
    text: "A fantastic tool for developers. Makes life so much easier."
  },
  {
    id: 4,
    imgSrc: "/assets/images/girl3.png",
    name: "Emily Johnson",
    occupation: "Product Manager",
    text: "Great app with intuitive UI and powerful features."
  },
  {
    id: 5,
    imgSrc: "/assets/images/pep1.png",
    name: "Michael Brown",
    occupation: "UX Designer",
    text: "The best app I have ever used for my design work."
  }
];

export { testimonials };
