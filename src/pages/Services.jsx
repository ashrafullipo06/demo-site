import servicesData from "../../src/data/services/servicesData";

const Services = () => {
  return (
    <div className="text-center">
      <p className=" font-bold pt-8 bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent">#Cooperation</p>
      <h4 className=" pt-1 pb-9 text-3xl font-bold text-gray-700">Designing solutions customized<br/> <span>to meet your requirements</span></h4>

      <div className="services-section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <div key={index} className="border p-4 rounded-lg shadow bg-[#F6F5F2] hover:shadow-lg transition">
            <img src={service.img} alt={service.title} className="mx-auto mb-4 h-[100px]" />
            <h4 className="font-semibold text-lg">{service.title}</h4>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p>
          Excited to take on new projects and collaborate. Let's chat about your
          ideas. Reach out!
        </p>
        <p>Let's chat about your ideas. Reach out!</p>
      </div>
    </div>
  );
};

export default Services;
