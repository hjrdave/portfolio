import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import bookCover from '../../../images/prymziabookcover.png';
import rollupBanner from '../../../images/rollupbanner.png';
import businessCard from '../../../images/somethingstitched.png';
import prymziaMap from '../../../images/prymziamapv1.png';

const data: { imageURL: string, company: string, type: string, bio: string, tags: string[] }[] = [
    {
        imageURL: eventTicket,
        company: 'Morgan Acres',
        type: 'Event Ticket',
        bio: 'This was a prom ticket I created for a venue. I used some open source images to create silloutes and some classic theatre themed fonts. I modeled it after classic circus and carnival tickets.',
        tags: ['Photoshop', 'Illustrator']
    },
    {
        imageURL: generalBrochure,
        company: 'Horizon University',
        type: 'Student Packet',
        bio: 'This was a student packet marketing piece I designed to help the school with lead generation.',
        tags: ['Photoshop', 'Illustrator']
    },
    {
        imageURL: infocards1,
        company: 'Horizon University',
        type: 'Post Cards',
        bio: 'These are post cards the school hands out at events and includes in student packets.',
        tags: ['Photoshop']
    },
    {
        imageURL: bookCover,
        company: 'TL Sanders',
        type: 'Book Cover',
        bio: 'A book cover I designed and illustrated for a fanatasy novel called `Prymzia: Ravager of the Sea`.',
        tags: ['Photoshop', 'Illustrator', 'Indesign']
    },
    {
        imageURL: businessCard,
        company: 'Something Sewn Something Stitched',
        type: 'Business Card',
        bio: 'Contact cards for a local seamstress and her business.',
        tags: ['Photoshop', 'Illustrator']
    },
    {
        imageURL: rollupBanner,
        company: 'Horizon University',
        type: 'Roll Up Banners',
        bio: '',
        tags: ['Photoshop', 'Illustrator']
    },
    {
        imageURL: prymziaMap,
        company: 'TL Sanders',
        type: 'Book Illustration',
        bio: 'A map illustration of the fictional island of Prymzia that I illustrated for the book `Prymzia: Ravager of the Sea`.',
        tags: ['Illustrator']
    }
];

export default data;