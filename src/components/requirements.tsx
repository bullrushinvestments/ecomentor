import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IRequirement {
  title: string;
  description?: string;
  isEssential: boolean;
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: IRequirement[]) => void;
}

const GatherRequirementsForm: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState } = useForm<IRequirement[]>();
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const toast = useToast();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      toast({
        title: 'Requirements submitted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    }
  }, [formState, reset, toast]);

  const handleAddRequirement = () => {
    setRequirements([...requirements, { title: '', description: '', isEssential: false }]);
  };

  const handleRemoveRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  const onSubmitForm: SubmitHandler<IRequirement[]> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-1 text-sm font-medium">
            Requirement Title
          </label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`)}
            required
            placeholder="Enter requirement title"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <label htmlFor={`description-${index}`} className="block mb-1 mt-2 text-sm font-medium">
            Requirement Description (Optional)
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            placeholder="Enter requirement description"
            rows={3}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mt-1 flex items-center">
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              {...register(`requirements.${index}.isEssential`)}
              className="mr-2"
            />
            <label htmlFor={`isEssential-${index}`} className="text-sm font-medium">
              Is Essential?
            </label>
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveRequirement(index)}
              className="mt-2 text-red-500 hover:underline"
            >
              Remove Requirement
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddRequirement}
        className="mb-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add Requirement
      </button>
      <button
        type="submit"
        disabled={!formState.isDirty || formState.isValid === false}
        className={`bg-green-500 text-white p-2 rounded-md ${!formState.isDirty && 'cursor-not-allowed opacity-50'}`}
      >
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirementsForm;

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IRequirement {
  title: string;
  description?: string;
  isEssential: boolean;
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: IRequirement[]) => void;
}

const GatherRequirementsForm: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState } = useForm<IRequirement[]>();
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const toast = useToast();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      toast({
        title: 'Requirements submitted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    }
  }, [formState, reset, toast]);

  const handleAddRequirement = () => {
    setRequirements([...requirements, { title: '', description: '', isEssential: false }]);
  };

  const handleRemoveRequirement = (index: number) => {
    const newRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(newRequirements);
  };

  const onSubmitForm: SubmitHandler<IRequirement[]> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-1 text-sm font-medium">
            Requirement Title
          </label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`)}
            required
            placeholder="Enter requirement title"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <label htmlFor={`description-${index}`} className="block mb-1 mt-2 text-sm font-medium">
            Requirement Description (Optional)
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            placeholder="Enter requirement description"
            rows={3}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mt-1 flex items-center">
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              {...register(`requirements.${index}.isEssential`)}
              className="mr-2"
            />
            <label htmlFor={`isEssential-${index}`} className="text-sm font-medium">
              Is Essential?
            </label>
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveRequirement(index)}
              className="mt-2 text-red-500 hover:underline"
            >
              Remove Requirement
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddRequirement}
        className="mb-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add Requirement
      </button>
      <button
        type="submit"
        disabled={!formState.isDirty || formState.isValid === false}
        className={`bg-green-500 text-white p-2 rounded-md ${!formState.isDirty && 'cursor-not-allowed opacity-50'}`}
      >
        Submit Requirements
      </button>
    </form>
  );
};

export default GatherRequirementsForm;