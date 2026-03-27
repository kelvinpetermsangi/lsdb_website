'use client';

import { useMemo, useState } from 'react';
import Modal from '@/components/ui/Modal';
import {
  TANZANIA_REGIONS,
  DISTRICTS_BY_REGION,
  getRegionById,
  getDistrictById,
} from '@/lib/tanzaniaLocations';

interface LocationPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion?: string;
  selectedDistrict?: string;
  onConfirm: (payload: { region: string; district: string }) => void;
}

type Step = 'region' | 'district';

export default function LocationPickerModal({
  isOpen,
  onClose,
  selectedRegion = '',
  selectedDistrict = '',
  onConfirm,
}: LocationPickerModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Location"
      size="lg"
    >
      {isOpen && (
        <LocationPickerModalContent
          key={`${selectedRegion}:${selectedDistrict}`}
          onClose={onClose}
          onConfirm={onConfirm}
          selectedDistrict={selectedDistrict}
          selectedRegion={selectedRegion}
        />
      )}
    </Modal>
  );
}

interface LocationPickerModalContentProps {
  onClose: () => void;
  selectedRegion: string;
  selectedDistrict: string;
  onConfirm: (payload: { region: string; district: string }) => void;
}

function LocationPickerModalContent({
  onClose,
  onConfirm,
  selectedRegion,
  selectedDistrict,
}: LocationPickerModalContentProps) {
  const [step, setStep] = useState<Step>(selectedRegion ? 'district' : 'region');
  const [selectedRegionId, setSelectedRegionId] = useState<string>(selectedRegion);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>(selectedDistrict);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedRegionObj = useMemo(
    () => getRegionById(selectedRegionId),
    [selectedRegionId]
  );

  const selectedDistrictObj = useMemo(
    () => getDistrictById(selectedDistrictId),
    [selectedDistrictId]
  );

  const districts = useMemo(
    () => (selectedRegionId ? DISTRICTS_BY_REGION[selectedRegionId] || [] : []),
    [selectedRegionId]
  );

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredRegions = useMemo(() => {
    if (!normalizedSearch) return TANZANIA_REGIONS;

    return TANZANIA_REGIONS.filter((region) => {
      const nameMatch = region.name.toLowerCase().includes(normalizedSearch);
      const capitalMatch = region.capital?.toLowerCase().includes(normalizedSearch);
      return nameMatch || capitalMatch;
    });
  }, [normalizedSearch]);

  const filteredDistricts = useMemo(() => {
    if (!normalizedSearch) return districts;

    return districts.filter((district) =>
      district.name.toLowerCase().includes(normalizedSearch)
    );
  }, [districts, normalizedSearch]);

  const isConfirmDisabled = !selectedRegionId || !selectedDistrictId;

  const locationLevelLabel = 'Council / Municipality / District';
  const stepTwoShortLabel = 'Area';

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegionId(regionId);
    setSelectedDistrictId('');
    setStep('district');
    setSearchQuery('');
  };

  const handleDistrictSelect = (districtId: string) => {
    setSelectedDistrictId(districtId);
  };

  const handleBack = () => {
    setStep('region');
    setSearchQuery('');
  };

  const handleReset = () => {
    setSelectedRegionId('');
    setSelectedDistrictId('');
    setStep('region');
    setSearchQuery('');
  };

  const handleConfirm = () => {
    const region = getRegionById(selectedRegionId);
    const district = getDistrictById(selectedDistrictId);

    if (!region || !district) return;

    onConfirm({
      region: region.name,
      district: district.name,
    });

    onClose();
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 'region' ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
              }`}
            >
              1
            </div>
            <span
              className={`text-sm font-medium ${
                step === 'region' ? 'text-foreground' : 'text-muted'
              }`}
            >
              Region
            </span>
          </div>

          <div className="h-px flex-1 mx-4 bg-border" />

          <div className="flex items-center space-x-2">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 'district' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
              }`}
            >
              2
            </div>
            <span
              className={`text-sm font-medium ${
                step === 'district' ? 'text-foreground' : 'text-muted'
              }`}
            >
              {stepTwoShortLabel}
            </span>
          </div>
        </div>

        <div className="sticky top-0 z-10 bg-background pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder={
                step === 'region'
                  ? 'Search regions...'
                  : `Search ${locationLevelLabel.toLowerCase()}...`
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            />
            <div className="absolute left-3 top-3.5 text-muted">🔍</div>

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-muted hover:text-foreground"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {step === 'region' && (
          <div className="space-y-4">
            {filteredRegions.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-muted">No regions found matching {searchQuery}</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">
                {filteredRegions.map((region) => (
                  <button
                    type="button"
                    key={region.id}
                    onClick={() => handleRegionSelect(region.id)}
                    className={`p-4 rounded-xl border text-left transition-all hover:shadow-md ${
                      selectedRegionId === region.id
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{region.name}</h3>
                        {region.capital && (
                          <p className="text-sm text-muted mt-1">Capital: {region.capital}</p>
                        )}
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          selectedRegionId === region.id
                            ? 'border-primary bg-primary text-white'
                            : 'border-border'
                        }`}
                      >
                        {selectedRegionId === region.id && '✓'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {step === 'district' && (
          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Selected Region</p>
                  <p className="font-medium text-foreground">{selectedRegionObj?.name}</p>
                </div>
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-sm text-primary hover:underline"
                >
                  Change region
                </button>
              </div>
            </div>

            {districts.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">
                  No location entries available
                </h4>
                <p className="text-muted mb-4">
                  Data for {selectedRegionObj?.name} is not currently available in the
                  location file.
                </p>
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Choose different region
                </button>
              </div>
            ) : filteredDistricts.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-muted">No entries found matching {searchQuery}</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2">
                {filteredDistricts.map((district) => (
                  <button
                    type="button"
                    key={district.id}
                    onClick={() => handleDistrictSelect(district.id)}
                    className={`p-4 rounded-xl border text-left transition-all hover:shadow-md ${
                      selectedDistrictId === district.id
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{district.name}</h3>
                        <p className="text-sm text-muted mt-1">{locationLevelLabel}</p>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          selectedDistrictId === district.id
                            ? 'border-primary bg-primary text-white'
                            : 'border-border'
                        }`}
                      >
                        {selectedDistrictId === district.id && '✓'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {(selectedRegionId || selectedDistrictId) && (
          <div className="bg-muted/30 border border-border rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                {selectedRegionObj && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted">Region:</span>
                    <span className="font-medium text-foreground">{selectedRegionObj.name}</span>
                  </div>
                )}

                {selectedDistrictObj && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted">Selected area:</span>
                    <span className="font-medium text-foreground">
                      {selectedDistrictObj.name}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-6 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Cancel
          </button>

          {step === 'district' && (
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 py-3 px-6 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Back
            </button>
          )}

          <button
            type="button"
            onClick={handleConfirm}
            disabled={isConfirmDisabled}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
              isConfirmDisabled
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            Confirm Selection
          </button>
        </div>

        <p className="text-sm text-muted text-center">
          This selection will be saved to your form. You can change it anytime.
        </p>
      </div>
    </>
  );
}
