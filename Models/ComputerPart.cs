using Contentful.Core.Models;

namespace project.Models
{
    public class ComputerPart
    {
        public string Name { get; set; }

        public string Part { get; set; }

        public string Company { get; set; }

        public int Price { get; set; }

        public Asset Image {  get; set; }
    }
}
