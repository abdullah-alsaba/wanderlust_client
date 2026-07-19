"use client";


import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Select,
  ListBox,
  TextArea,
  TextField,
  toast,
  ModalTrigger,
} from "@heroui/react";
import { Pencil, Save, X } from "lucide-react";



const EditDestination = ({ destinationDetails }) => {
  const {
    _id,
    country,
    imageUrl,
    duration,
    price,
    destinationName,
    description,
    highlights,
    category,
    departure,
  } = destinationDetails;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:7000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      
      toast.success("Destination Updated Successfully");
    } else {
      toast.error("Update Failed");
    }
  };

  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-gray-100 transition">
        <Pencil size={16} />
        Edit
      </ModalTrigger>

      <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-170 rounded-lg bg-white shadow-2xl overflow-hidden">
            {/* Header */}

            <Modal.Header className="border-b border-gray-200 px-8 py-6">
              <Modal.Heading className="text-2xl font-semibold text-gray-900">
                Update Travel Package
              </Modal.Heading>

              <p className="mt-2 text-sm text-gray-500">
                Make changes to the travel package details below.
              </p>

             
            </Modal.Header>

            {/* Body */}

            <Modal.Body className="px-8 py-8">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Destination Name */}

                <TextField
                  defaultValue={destinationName}
                  name="destinationName"
                  
                >
                  <Label>Destination Name</Label>

                  <Input
                    placeholder="Bali Paradise"
                    className="h-12 rounded-lg"
                  />

                  <FieldError />
                </TextField>

                {/* Grid */}

                <div className="grid grid-cols-2 gap-6">
                  <TextField defaultValue={country} name="country" >
                    <Label>Country</Label>

                    <Input
                      placeholder="Indonesia"
                      className="h-12 rounded-lg"
                    />

                    <FieldError />
                  </TextField>

                  <Select
                    defaultValue={category}
                    name="category"
                    placeholder="Select Category"
                    
                  >
                    <Label>Category</Label>

                    <Select.Trigger className="h-12 rounded-lg">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Beach">Beach</ListBox.Item>

                        <ListBox.Item id="Mountain">Mountain</ListBox.Item>

                        <ListBox.Item id="City">City</ListBox.Item>

                        <ListBox.Item id="Adventure">Adventure</ListBox.Item>

                        <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField defaultValue={price} name="price" >
                    <Label>Price (USD)</Label>

                    <Input
                      type="number"
                      placeholder="1299"
                      className="h-12 rounded-lg"
                    />

                    <FieldError />
                  </TextField>

                  <TextField defaultValue={duration} name="duration" >
                    <Label>Duration</Label>

                    <Input
                      placeholder="7 Days / 6 Nights"
                      className="h-12 rounded-lg"
                    />

                    <FieldError />
                  </TextField>
                </div>

                <TextField
                  defaultValue={departure}
                  name="departureDate"
                  
                >
                  <Label>Departure Date</Label>

                  <Input type="date" className="h-12 rounded-lg" />

                  <FieldError />
                </TextField>

                <TextField defaultValue={imageUrl} name="imageUrl" >
                  <Label>Image URL</Label>

                  <Input
                    placeholder="https://example.com/image.jpg"
                    className="h-12 rounded-lg"
                  />

                  <FieldError />
                </TextField>

                <TextField
                  defaultValue={description}
                  name="description"
                  
                >
                  <Label>Description</Label>

                  <TextArea
                    className="min-h-32.5 rounded-lg"
                    placeholder="Describe the travel experience..."
                  />

                  <FieldError />
                </TextField>

                {/* Footer */}

                <div className="flex justify-end gap-4 pt-6 border-t">
                  <Modal.CloseTrigger className="absolute right-5 top-5 rounded-full hover:bg-red-400">
                   
                      <X size={18} />
                   
                  </Modal.CloseTrigger>

                  <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDestination;
