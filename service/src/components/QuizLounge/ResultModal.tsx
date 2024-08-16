import EventModal from '../common/Modal/EventModal/EventModal';

interface ResultModalProps {
  result: boolean;
  title: string;
  subTitle: string;
  image?: string;
  description: string;
  code?: string;
  date?: string;
  handleModal: () => void;
}

const ResultModal = ({
  result,
  title,
  subTitle,
  image,
  description,
  code,
  date,
  handleModal,
}: ResultModalProps) => {
  if (result) {
    return (
      <EventModal
        title={title}
        subtitle={subTitle}
        image={image}
        description={description}
        code={code}
        date={date}
        isQrModal={true}
        handleClose={handleModal}
      />
    );
  } else {
    return (
      <EventModal
        title={title}
        subtitle={subTitle}
        description={description}
        handleClose={handleModal}
      />
    );
  }
};

export default ResultModal;
